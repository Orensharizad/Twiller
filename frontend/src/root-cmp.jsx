import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'
import { CarIndex } from './pages/car-index'
import { HomePage } from './pages/home-page'
import { ReviewIndex } from './pages/review-index'
import { ChatApp } from './pages/chat-app'
import { AboutUs } from './pages/about-us'
import { AdminApp } from './pages/admin-app'

export function RootCmp() {

    return (
        <div>
            <AppHeader />
            <main>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="/" element={<HomePage />} />
                    <Route path="car" element={<CarIndex />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="admin" element={<AdminApp />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="user/:id" element={<UserDetails />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}
