import Header from '@/components/global/Header'
import { ComponentType } from 'react'

const withLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return function WithLayoutComponent(props: P) {
    return (
      <>
        <Header />
        <main className='w-screen h-auto flex justify-center'>
          <WrappedComponent {...props} />
        </main>
      </>
    )
  }
}

export default withLayout
