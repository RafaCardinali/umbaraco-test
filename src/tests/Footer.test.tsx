import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/footer/Footer';

describe('Footer Component', () => {
    it('should display the email icon link', () => {
        render(<Footer />);
        const emailIconLink = screen.getByLabelText('Email');
        expect(emailIconLink).toBeInTheDocument();
        expect(emailIconLink).toHaveAttribute('href', 'mailto:rflcardinali@gmail.com');
    });

    it('should display the LinkedIn icon link', () => {
        render(<Footer />);
        const linkedInIconLink = screen.getByLabelText('LinkedIn');
        expect(linkedInIconLink).toBeInTheDocument();
        expect(linkedInIconLink).toHaveAttribute('href', 'https://www.linkedin.com/in/rafael-cardinali-213899296/');
    });

    it('should contain the developer credit text', () => {
        render(<Footer />);
        const developerCreditText = screen.getByText('Rafael Cardinali');
        expect(developerCreditText).toBeInTheDocument();
    });
});
