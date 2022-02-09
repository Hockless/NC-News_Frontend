import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <figure>
                 <nav>
                      <div>

                         <Link className='header' to='/'>NC NEWS</Link>
                     </div>
                          <li>
                <Link to='/'>
                    Home
                </Link>
                         </li>
                     <li>
                <Link to='/topics'>
                    Topics
             </Link>
                         </li>
                 </nav>
            </figure>
        </header>

    )
}


export default Header;