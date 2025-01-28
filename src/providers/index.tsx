import { ReactNode } from 'react'
import ReactQueryProvider from './ReactQueryProvider';

function Providers({ children }: { children: ReactNode}) {
  return (
    <ReactQueryProvider>
        {children}
    </ReactQueryProvider>
  )
}

export default Providers;