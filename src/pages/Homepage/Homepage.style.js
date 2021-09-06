import styled from 'styled-components';

const HomepageStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
    }
    .header-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            font-size: 4rem;

            span {
                color: #C84B31;
            }
        }

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid #222831;
                border-radius: .2rem;
                padding: .3rem .5rem;
                margin-left: 1.6rem; 
                transition: all .4s;
                cursor: pointer;
                
            }
            .i-github, .i-linkedin, .i-twitter {
                color: #525252;
                &:hover {
                    border: 1px solid #1B1B2F;
                    color: #4B5D67;
                }
            }
        }
    }

`

export default HomepageStyle;