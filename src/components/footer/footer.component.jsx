import './footer.styles.css';

export const Footer = () =>{

    const year = new Date().getFullYear();

    return(
        <footer className = 'footer'>
            <p>Copyright ⓒ {year}. All Rights Reserved by Cleo Gao </p>
        </footer>
    )
}

