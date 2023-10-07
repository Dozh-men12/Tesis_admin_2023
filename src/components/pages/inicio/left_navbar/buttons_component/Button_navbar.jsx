import './Button_navbar.css';

function Button_navbar({texto}){
    return(
        <div className="button_navbar" >
            <a href="https://www.facebook.com/">{texto}</a>
        </div>

    );
}

export default Button_navbar ;