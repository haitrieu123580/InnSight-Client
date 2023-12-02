import { useEffect, useState } from 'react';

const useReloadAlert = (condition) => {
    const [showReloadAlert, setShowReloadAlert] = useState(false);

    const handleBeforeUnload = (event) => {
        const message = 'Dữ liệu chưa được lưu. Bạn có chắc muốn rời khỏi trang?';
        event.returnValue = message;
        return message;
    };

    useEffect(() => {
        const beforeUnloadHandler = (event) => {
            // if (condition) {
            setShowReloadAlert(true);
            event.preventDefault();
            event.returnValue = ''; // Some browsers require an empty string
            // }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', beforeUnloadHandler);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', beforeUnloadHandler);
        };
    }, [condition]);

    return showReloadAlert;
};

export default useReloadAlert;
