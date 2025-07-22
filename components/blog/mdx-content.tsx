interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  // Process bold text and inline code formatting
  const processInlineFormatting = (text: string) => {
    // First handle inline code (single backticks)
    const codeProcessed = text.split(/(`[^`]+`)/g).map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={`code-${index}`} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
            {part.slice(1, -1)}
          </code>
        )
      }
      return part
    })

    // Then handle bold text
    return codeProcessed.map((part, index) => {
      if (typeof part === 'string') {
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g)
        return boldParts.map((boldPart, boldIndex) => {
          if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
            return (
              <strong key={`bold-${index}-${boldIndex}`} className="font-semibold">
                {boldPart.slice(2, -2)}
              </strong>
            )
          }
          return boldPart
        })
      }
      return part
    }).flat()
  }

  // Simple markdown-like rendering for the content
  const processContent = (content: string) => {
    // Split content but preserve code blocks
    const parts = []
    const sections = content.split(/(```[\s\S]*?```)/g)
    
    sections.forEach(section => {
      if (section.startsWith('```') && section.endsWith('```')) {
        // This is a code block, add it as-is
        parts.push(section)
      } else {
        // This is regular content, split by double newlines
        const paragraphs = section.split('\n\n').filter(p => p.trim())
        parts.push(...paragraphs)
      }
    })
    
    return parts.map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-semibold text-primary mb-4 mt-8">
              {processInlineFormatting(paragraph.replace('## ', ''))}
            </h2>
          )
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold text-primary mb-3 mt-6">
              {processInlineFormatting(paragraph.replace('### ', ''))}
            </h3>
          )
        }
        
        // Handle code blocks
        if (paragraph.startsWith('```') && paragraph.endsWith('```')) {
          const lines = paragraph.split('\n')
          const code = lines.slice(1, -1).join('\n') // Remove first and last line (the ``` markers)
          return (
            <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
              <code className="text-sm font-mono">{code}</code>
            </pre>
          )
        }
        
        // Handle unordered lists (including lines starting with "- **")
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const listItems = paragraph.split('\n').filter(line => line.trim().startsWith('- '))
          if (listItems.length > 0) {
            return (
              <ul key={index} className="list-disc list-inside text-foreground mb-4 space-y-2 ml-4">
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-foreground">
                    {processInlineFormatting(item.replace(/^- /, ''))}
                  </li>
                ))}
              </ul>
            )
          }
        }
        
        // Handle regular paragraphs
        if (paragraph.trim()) {
          return (
            <p key={index} className="text-foreground leading-relaxed mb-4">
              {processInlineFormatting(paragraph)}
            </p>
          )
        }
        
        return null
      })
      .filter(Boolean)
  }

  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-4">
        {processContent(source)}
      </div>
    </div>
  )
}