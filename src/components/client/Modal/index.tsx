import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
    open: boolean,
    setOpen: (bool: boolean) => void,
    children: ReactNode,
    transparent?: boolean,
    maxWidth?: number | null,
    position?: string,
    overflowHidden?: boolean,
    preventScroll?: boolean,
    preventClose?: boolean,
    isCenter?: boolean,
    className?: string,
    maxHeight?: number,
    height?: number,
    width?: number,
    onCloseEffect?: () => void,
    preventBackdropClick?: boolean
}

function Modal({
    open, setOpen, children, maxWidth, className, maxHeight,
    height, width, onCloseEffect, preventBackdropClick = false
}: Props) {
    const [isModalOpen, setModalOpen] = useState(open);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(open);
    }, [open]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();

            }
        }
    }, [isModalOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (!modalElement) return
        const handleOnClose = () => {
            if (onCloseEffect) {
                onCloseEffect()
            }
        }
        modalElement.addEventListener("close", handleOnClose)

        return () => {
            modalElement.removeEventListener("close", handleOnClose)
        }
    }, [])

    useEffect(() => {
        const modalEl = modalRef.current;
        if (!modalEl) return;
        const onClickBackdrop = (event: MouseEvent) => {
            if (preventBackdropClick) return
            var rect = modalEl.getBoundingClientRect();
            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                modalEl.close();
                setOpen(false)
            }
        }
        modalEl.addEventListener('click', onClickBackdrop);

        return () => {
            modalEl.removeEventListener("click", onClickBackdrop)
        }
    }, [modalRef])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            setOpen(false);
            if (onCloseEffect) {
                onCloseEffect()
            }
        }
    };

    return <dialog
        onKeyDown={handleKeyDown}
        ref={modalRef}
        className={`dialog-modal bg-transparent overflow-x-hidden no-scrollbar ${className ?? ""}`}
        style={{
            maxWidth: maxWidth ?? 500,
            maxHeight: maxHeight ?? "auto",
            height: height ?? "max-content",
            width: width ?? "auto"
        }}
    >
        {children}
    </dialog>
}

export default Modal;
