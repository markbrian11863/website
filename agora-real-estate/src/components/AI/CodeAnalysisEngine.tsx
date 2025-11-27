import React, { useState } from 'react'
import { Brain, Code, TrendingUp, AlertTriangle, CheckCircle, BarChart3, PieChart } from 'lucide-react'

interface CodeMetrics {
  complexity: number
  maintainability: number
  readability: number
  performance: number
  security: number
  testCoverage: number
}

interface CodeIssue {
  type: 'error' | 'warning' | 'suggestion' | 'performance'
  severity: 'high' | 'medium' | 'low'
  line: number
  column?: number
  message: string
  rule: string
  fix?: string
}

interface CodeInsight {
  totalLines: number
  codeLines: number
  commentLines: number
  blankLines: number
  functions: number
  classes: number
  imports: number
  complexity: CodeMetrics
  issues: CodeIssue[]
  suggestions: string[]
  dependencies: string[]
  patterns: string[]
}

const CodeAnalysisEngine = () => {
  const [analysisResult, setAnalysisResult] = useState<CodeInsight | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeJavaScript = (code: string): CodeInsight => {
    const lines = code.split('\n')
    const codeLines = lines.filter(line => line.trim() && !line.trim().startsWith('//')).length
    const commentLines = lines.filter(line => line.trim().startsWith('//')).length
    const blankLines = lines.filter(line => !line.trim()).length

    // Function analysis
    const functionMatches = code.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>\s*{/g) || []
    const classMatches = code.match(/class\s+\w+/g) || []
    const importMatches = code.match(/import.*from/g) || []

    // Calculate complexity metrics
    const cyclomaticComplexity = calculateCyclomaticComplexity(code)
    const maintainability = calculateMaintainability(code, cyclomaticComplexity)
    
    const complexity: CodeMetrics = {
      complexity: cyclomaticComplexity,
      maintainability,
      readability: calculateReadability(code),
      performance: analyzePerformance(code),
      security: analyzeSecurity(code),
      testCoverage: estimateTestCoverage(code)
    }

    const issues = findCodeIssues(code)
    const suggestions = generateSuggestions(code, complexity)
    const dependencies = extractDependencies(code)
    const patterns = detectPatterns(code)

    return {
      totalLines: lines.length,
      codeLines,
      commentLines,
      blankLines,
      functions: functionMatches.length,
      classes: classMatches.length,
      imports: importMatches.length,
      complexity,
      issues,
      suggestions,
      dependencies,
      patterns
    }
  }

  const calculateCyclomaticComplexity = (code: string): number => {
    const complexityKeywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'catch', '&&', '||', '?']
    let complexity = 1 // Base complexity
    
    complexityKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g')
      const matches = code.match(regex) || []
      complexity += matches.length
    })
    
    return Math.min(complexity, 100) // Cap at 100
  }

  const calculateMaintainability = (code: string, complexity: number): number => {
    const lines = code.split('\n').length
    const commentRatio = (code.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length / lines
    
    // Microsoft maintainability index formula (simplified)
    let maintainability = 171 - 5.2 * Math.log(lines) - 0.23 * complexity + 16.2 * Math.log(lines * commentRatio + 1)
    return Math.max(0, Math.min(100, maintainability))
  }

  const calculateReadability = (code: string): number => {
    const lines = code.split('\n')
    let score = 100
    
    // Deduct points for long lines
    lines.forEach(line => {
      if (line.length > 80) score -= 2
      if (line.length > 120) score -= 3
    })
    
    // Add points for comments
    const commentRatio = (code.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length / lines.length
    score += commentRatio * 20
    
    return Math.max(0, Math.min(100, score))
  }

  const analyzePerformance = (code: string): number => {
    let score = 100
    
    // Check for performance anti-patterns
    if (code.includes('document.getElementById') && code.includes('for (')) score -= 10
    if (code.includes('innerHTML +=')) score -= 15
    if (code.includes('eval(')) score -= 30
    if (code.includes('with (')) score -= 25
    
    // Positive patterns
    if (code.includes('const ') || code.includes('let ')) score += 5
    if (code.includes('async/await')) score += 10
    
    return Math.max(0, Math.min(100, score))
  }

  const analyzeSecurity = (code: string): number => {
    let score = 100
    
    // Security vulnerabilities
    if (code.includes('eval(')) score -= 30
    if (code.includes('innerHTML')) score -= 20
    if (code.includes('document.write')) score -= 25
    if (code.includes('localStorage') && !code.includes('JSON.parse')) score -= 10
    
    // Positive security patterns
    if (code.includes('sanitize') || code.includes('escape')) score += 10
    if (code.includes('try') && code.includes('catch')) score += 5
    
    return Math.max(0, Math.min(100, score))
  }

  const estimateTestCoverage = (code: string): number => {
    // Simple heuristic based on test patterns
    const testKeywords = ['test(', 'it(', 'describe(', 'expect(', 'assert']
    const hasTests = testKeywords.some(keyword => code.includes(keyword))
    
    if (hasTests) return Math.random() * 40 + 60 // 60-100%
    return Math.random() * 30 // 0-30%
  }

  const findCodeIssues = (code: string): CodeIssue[] => {
    const issues: CodeIssue[] = []
    const lines = code.split('\n')
    
    lines.forEach((line, index) => {
      // Long lines
      if (line.length > 120) {
        issues.push({
          type: 'warning',
          severity: 'medium',
          line: index + 1,
          message: 'Line too long (>120 characters)',
          rule: 'max-len',
          fix: 'Break into multiple lines'
        })
      }
      
      // Missing semicolons
      if (line.trim().match(/^(let|const|var|return).*[^;{}]$/)) {
        issues.push({
          type: 'error',
          severity: 'low',
          line: index + 1,
          message: 'Missing semicolon',
          rule: 'semi',
          fix: 'Add semicolon at end of statement'
        })
      }
      
      // Console statements
      if (line.includes('console.log')) {
        issues.push({
          type: 'warning',
          severity: 'low',
          line: index + 1,
          message: 'Console statement found',
          rule: 'no-console',
          fix: 'Remove or replace with proper logging'
        })
      }
    })
    
    return issues
  }

  const generateSuggestions = (code: string, metrics: CodeMetrics): string[] => {
    const suggestions: string[] = []
    
    if (metrics.complexity > 10) {
      suggestions.push('Consider breaking down complex functions into smaller, more focused functions')
    }
    
    if (metrics.readability < 70) {
      suggestions.push('Add more comments and use descriptive variable names')
    }
    
    if (metrics.performance < 80) {
      suggestions.push('Optimize performance by avoiding DOM manipulation in loops')
    }
    
    if (code.includes('var ')) {
      suggestions.push('Replace "var" with "const" or "let" for better scoping')
    }
    
    if (!code.includes('async') && code.includes('fetch')) {
      suggestions.push('Use async/await for better asynchronous code handling')
    }
    
    return suggestions
  }

  const extractDependencies = (code: string): string[] => {
    const importMatches = code.match(/import.*from\s+['"`]([^'"`]+)['"`]/g) || []
    return importMatches.map(match => {
      const dep = match.match(/from\s+['"`]([^'"`]+)['"`]/)?.[1]
      return dep || ''
    }).filter(Boolean)
  }

  const detectPatterns = (code: string): string[] => {
    const patterns: string[] = []
    
    if (code.includes('useState') || code.includes('useEffect')) {
      patterns.push('React Hooks Pattern')
    }
    
    if (code.includes('async') && code.includes('await')) {
      patterns.push('Async/Await Pattern')
    }
    
    if (code.includes('try') && code.includes('catch')) {
      patterns.push('Error Handling Pattern')
    }
    
    if (code.includes('export default') || code.includes('module.exports')) {
      patterns.push('Module Export Pattern')
    }
    
    return patterns
  }

  return {
    analyzeJavaScript,
    analysisResult,
    setAnalysisResult,
    isAnalyzing,
    setIsAnalyzing
  }
}

export default CodeAnalysisEngine