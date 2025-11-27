import React, { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'
import { TrendingUp, BarChart3, PieChart as PieIcon, Activity, Download, Settings } from 'lucide-react'

interface DataPoint {
  name: string
  value: number
  [key: string]: any
}

interface ChartingEngineProps {
  data: DataPoint[]
  title: string
  type?: 'line' | 'bar' | 'pie' | 'area'
  colors?: string[]
  interactive?: boolean
  exportable?: boolean
}

const ChartingEngine: React.FC<ChartingEngineProps> = ({
  data,
  title,
  type = 'line',
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'],
  interactive = true,
  exportable = true
}) => {
  const [chartType, setChartType] = useState(type)
  const [selectedData, setSelectedData] = useState<DataPoint | null>(null)

  const formatData = useMemo(() => {
    return data.map((item, index) => ({
      ...item,
      fill: colors[index % colors.length]
    }))
  }, [data, colors])

  const handleExport = () => {
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', url)
    a.setAttribute('download', `${title.replace(/\s+/g, '_')}.csv`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const renderChart = () => {
    const commonProps = {
      data: formatData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    }

    switch (chartType) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={colors[0]} 
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        )

      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={colors[0]} radius={[4, 4, 0, 0]} />
          </BarChart>
        )

      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={colors[0]} 
              fill={colors[0]}
              fillOpacity={0.3}
            />
          </AreaChart>
        )

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={formatData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onClick={setSelectedData}
            >
              {formatData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )

      default:
        return null
    }
  }

  return (
    <div className="charting-engine">
      <div className="chart-header">
        <h3>{title}</h3>
        {interactive && (
          <div className="chart-controls">
            <div className="chart-type-selector">
              <button 
                className={chartType === 'line' ? 'active' : ''}
                onClick={() => setChartType('line')}
              >
                <TrendingUp size={16} />
              </button>
              <button 
                className={chartType === 'bar' ? 'active' : ''}
                onClick={() => setChartType('bar')}
              >
                <BarChart3 size={16} />
              </button>
              <button 
                className={chartType === 'area' ? 'active' : ''}
                onClick={() => setChartType('area')}
              >
                <Activity size={16} />
              </button>
              <button 
                className={chartType === 'pie' ? 'active' : ''}
                onClick={() => setChartType('pie')}
              >
                <PieIcon size={16} />
              </button>
            </div>
            {exportable && (
              <button className="export-btn" onClick={handleExport}>
                <Download size={16} />
                Export
              </button>
            )}
          </div>
        )}
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          {renderChart()}
        </ResponsiveContainer>
      </div>

      {selectedData && chartType === 'pie' && (
        <div className="chart-details">
          <h4>Selected: {selectedData.name}</h4>
          <p>Value: {selectedData.value}</p>
        </div>
      )}

      <style jsx>{`
        .charting-engine {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .chart-header h3 {
          margin: 0;
          color: #2d3748;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .chart-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .chart-type-selector {
          display: flex;
          background: #f7fafc;
          border-radius: 8px;
          padding: 4px;
          gap: 2px;
        }

        .chart-type-selector button {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          color: #718096;
          transition: all 0.2s ease;
        }

        .chart-type-selector button:hover {
          background: #e2e8f0;
          color: #2d3748;
        }

        .chart-type-selector button.active {
          background: #ff6b6b;
          color: white;
        }

        .export-btn {
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          transition: transform 0.2s ease;
        }

        .export-btn:hover {
          transform: translateY(-1px);
        }

        .chart-container {
          width: 100%;
          height: 300px;
        }

        .chart-details {
          margin-top: 1rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
        }

        .chart-details h4 {
          margin: 0 0 0.5rem;
          color: #2d3748;
          font-size: 1rem;
        }

        .chart-details p {
          margin: 0;
          color: #718096;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .chart-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .chart-controls {
            justify-content: space-between;
          }

          .chart-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  )
}

export default ChartingEngine