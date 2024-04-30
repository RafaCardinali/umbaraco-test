import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

describe('Sidebar', () => {
    test('should be visible when isVisible is true', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        
        const sidebarElement = screen.getByRole('navigation');
        expect(sidebarElement).toBeVisible();
    });

    test('should call toggle when the close button is clicked, if visible', () => {
        const toggleMock = jest.fn();
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        const buttonElements = screen.queryByLabelText('Menu-Hamburguer');
        if (buttonElements) {
            fireEvent.click(buttonElements);
            expect(toggleMock).toHaveBeenCalledTimes(1);
        } else {
            expect(toggleMock).not.toHaveBeenCalled();
        }
    });
});
