import React from 'react'
import { Routes, Route } from 'react-router'

import { AppFooter } from './cmps/app-footer'
import { CommentIndex } from './pages/comment-index'
import { MainSideMenu } from './cmps/main-side-menu'

export function RootCmp() {
    return (
        <div className="app">
            <main className="main-container">
                <Routes>
                    <Route path="/comment" element={<CommentIndex />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}
