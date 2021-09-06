import styled from 'styled-components';

const NavBarStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 2px solid #082032;

  .profileImg {
      width: 100%;
      padding: 2rem 0;
      text-align: center;
      border-bottom:  2px solid #082032;
    img{
        width: 50%;
        border-radius:  50%;
        border: 3px solid #082032;
    }
  }
  
  .nav-items  {
      width: 100%;
      text-align: center;
      li {
          display: block;

          a {
              display: block;
              color: white;
              font-size: 1.2rem;
              padding: .5rem 0;
              &:hover {
                  cursor: pointer;
                  color: #A19882;
              }
          }
      }
  }

  .footer {
      width: 100%;
      border-top: 2px solid #082032;
      text-align: center;
       p {
           display: block;
           font-size: .9rem;
           padding: 1rem 0;
       }
  }
`

export default NavBarStyle