import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { CommentIndex } from './pages/comment-index'
import { MainSideMenu } from './cmps/main-side-menu'

export function RootCmp() {
    return (
        <div>
            {/* <AppHeader /> */}
            <main className="main-container">
                <Routes>
                    <Route path="/comment" element={<CommentIndex />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}
