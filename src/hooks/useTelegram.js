const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        botInfo: tg.botInfo,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        telegramUserId: tg.initDataUnsafe?.user?.id,
        chatId: tg.initDataUnsafe?.chat?.id,
        initData: tg.initData,
        initDataUnsafe: tg.initDataUnsafe,
    }
}
