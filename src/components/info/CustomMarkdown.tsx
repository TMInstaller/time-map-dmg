import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
  content: string
}

const CustomMarkdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        // 예를 들어 h1 태그에 대한 커스텀 렌더링
        h1: ({ node, ...props }) => (
          <h1 className='text-3xl text-white font-bold my-4' {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className='text-2xl text-white font-bold my-4' {...props} />
        ),
        h3: ({ node, ...props }) => <h3 className='text-xl text-white font-bold my-4' {...props} />,
        p: ({ node, ...props }) => <p className='my-2 text-white text-base' {...props} />,
        a: ({ node, ...props }) => <a className='text-blue-600 hover:underline' {...props} />,
        ul: ({ node, ...props }) => (
          <ul className='list-disc text-white list-inside my-4' {...props} />
        ),
        li: ({ node, ...props }) => <li className='ml-4' {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className='border-l-4 border-blue-600 pl-4 py-2 italic bg-blue-950 text-black'
            {...props}
          />
        ),
        code: ({ node, ...props }) => (
          <code className='bg-gray-600 rounded p-[2px] font-mono text-sm' {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default CustomMarkdown
