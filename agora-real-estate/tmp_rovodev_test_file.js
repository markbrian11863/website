// Sample JavaScript file for testing the Code Analyzer
function calculateProductivity(linesOfCode, timeSpent) {
  // TODO: Add error handling
  if (timeSpent === 0) {
    return 0;
  }
  
  const productivity = linesOfCode / timeSpent;
  console.log("Productivity calculated:", productivity); // Remove console.log in production
  
  return productivity;
}

class CodeAnalyzer {
  constructor() {
    this.metrics = {};
  }
  
  // FIXME: This method needs optimization
  analyzeComplexity(code) {
    var complexityScore = 0; // Use let instead of var
    
    // Basic complexity calculation
    for (let i = 0; i < code.length; i++) {
      if (code[i] === '{') {
        complexityScore++;
      }
    }
    
    return complexityScore;
  }
  
  generateReport() {
    return {
      complexity: this.analyzeComplexity(),
      maintainability: 85,
      performance: 92
    };
  }
}

// Export for testing
export { calculateProductivity, CodeAnalyzer };