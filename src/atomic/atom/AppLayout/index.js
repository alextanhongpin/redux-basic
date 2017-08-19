import React from 'react'

import './index.css'

const DefaultHeader = <header>Header</header>
const DefaultFooter = <footer>Footer</footer>

const AppLayout = ({ header = DefaultHeader, children, footer = DefaultFooter }) => (
  <div className='app-layout'>
    {header}
    <main className='app-body'>{children}</main>
    {footer}
  </div>
)

export default AppLayout
