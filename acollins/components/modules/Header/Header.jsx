import HeaderSpan from "@/components/elements/HeaderSpan";

const Header = () => {
    return (
        <header>
            <div>
                <HeaderSpan>Главная</HeaderSpan>
                <HeaderSpan>Фото</HeaderSpan>
                <HeaderSpan>Видео</HeaderSpan>
                <HeaderSpan>3D</HeaderSpan>
                <HeaderSpan>Цена</HeaderSpan>
                <HeaderSpan>Обо мне</HeaderSpan>
            </div>
        </header>
    );
};

export default Header;