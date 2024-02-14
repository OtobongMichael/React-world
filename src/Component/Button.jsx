import React from 'react'

export default function Button(props) {
    const {content} = props
  return (
    
    <div>
         <a
  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
{content}
</a>
    </div>
  )
}

