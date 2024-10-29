import AccessData from '@/pages/access-data'
import { GlobalStyles } from '@/styles'
import { Suspense } from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback='Loading ...'>
        <RouterRoutes>
          <Route path='/' element={<AccessData />} />
        </RouterRoutes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
