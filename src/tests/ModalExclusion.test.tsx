import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalExclusion from '../components/modal-exclusion/ModalExclusion';
import { ModalProps } from '../models/ModalProps';

describe('ModalExclusion Component', () => {
  const defaultProps: ModalProps = {
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
    children: <div>test child</div>
  };

  it('renders with the correct message and buttons', () => {
    render(<ModalExclusion {...defaultProps} />);
    expect(screen.getByText('Você tem certeza?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls the correct functions on button clicks', () => {
    render(<ModalExclusion {...defaultProps} />);
    fireEvent.click(screen.getByText('Confirm'));
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Cancel'));
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('renders additional children content', () => {
    render(<ModalExclusion {...defaultProps} />);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });

  it('applies correct styles from the stylesheet', () => {
    const { container } = render(<ModalExclusion {...defaultProps} />);
    expect(container.firstChild).toHaveClass('modal');
  });
});
