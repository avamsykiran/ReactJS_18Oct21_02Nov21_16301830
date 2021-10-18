ReactJS
-----------------------------------------------------------------------

    is a SPA javascript library.

    Pre-Requisites
    ---------------------------------------------------------------
        HTML 5
            Standard HTML typography
            Form Elements and Valdiation Attributes
            HTML 5 api
                Web Storage
                GeoLocation

        CSS 3
            Style sheets
            selectors
            css properties
            respinsive css design

        Bootstrap (optional)

        Javascript (ES6)
            Standard Javascript Objects 
                window
                document
                history
                location
                navigator
            Standard JS Classes
                String
                Math
                Promise
            Function
                Arrow Functions
                Call Backs
                Closures
                Optional Parameter
                Rest Parameters using Rest operator
                Spread operator
            Arrays and Array Prototype Function
            ES6 Features
                ESM - ES Modules
                Template Literals
                async and await

    
    Lab SetUp
    ---------------------------------------------------------------

        VSCode                  IDE                https://code.visualstudio.com/download
        NodeJS                  Dev Platform       nodejs.org
                                    node --version
        npm                     Build and Dependency management tool
                                    npm --version

        create-react-app        React Project Creaton or initiation

    Web Evolution
    ---------------------------------------------------------------

        static website
            .html + .css + .js

        dynamic web applications

                asp.net
                servlets and jsp

            Server Side                                             Client Side

                BackEnd App     <----------REQ---------------------
                ViewEngine
                    data + viewtemplate
                                (.jsp,.aspx..)

                                --- Generated html + css ------------>  unload the existing page
                                                                    and renders the recevied html and css.


                - the client must wati until the resposne is received, and until then
                        the page remains compeltly unaccessable (irresponsive)
                - irrespective of how much the old and the new page are differen on the content,
                    the old page must be unloaded and
                    the new page msut be loaded.


        single page apps

            Server Side                                             Client Side

                SPA Bundle          <-----First REQ-------------------
                    (index.html +
                        .css +
                        .js)        ---RESP (Whole SPA budnle) --------> index.html is rendered along with css
                                                                    and .js also is loaded

                                                                    all links and form submittion are
                                                                    handled by the JS on the cleitn itself.


                WebService          <---------REQ------------------------
                    SOAP/REST api

                                    ------------RESP(data.json/data.xml)---> JS will receive the data
                                                                    and generates an html contnet accordingly and
                                                                    replaces the html content in index.html wiht
                                                                    the generated html content.
    ReactJS Intro
    ---------------------------------------------------------------


        why we need a server-side JS runtiem like NodeJS, when SPA runs on the client??

            compose the code            IDE                 VSCode
            Manage Dependencies         Build Tool          npm
            Test Cases                  Testing Lib         Jasmine
            Build our app               Build Script Tool   react-scripts
            ...etc

            and these tools run on server and hence we need a server-side runtime like NodeJS


        + componenet based html extensive lib,
                we can create our own html attributes and tags.
        + shadow dom or virtual dom to auto-render the html content as and when the state (data) changes.

    
    ReactJS Components
    ---------------------------------------------------------------

         a component is self-contained smart block or segment of a page.
         in a SPA, the single page (index.html) composes of multiple components.

            index.html
                head
                    meta tags
                    style tags ..etc
                body
                    <App/>
                        |
                        |-<Header />
                        |-<MenuBar />
                        |-<Main />
                        |   |-<Dashboard />
                        |   |-<EmpList />  can be repalced with <EmpForm /> or with <DeptList /> or with <DeptForm/>
                        |-<Footer />

        
                Component   =   state + props + render()

                                state is the data the component holds
                                        EmpList holds employee[] in its state
                                        EmpForm holds employee object in its state
                                        DeptList holds dept[] in its state

                                        each tiem the state is modifed the componet's render() method is called.

                                render()
                                        should return a JSX element
                                            and the JSX is a specail script having JS embeded inside html dom.

                                        <h1>{this.state.pageTitle}</h1>

                                props
                                        are attributes of a component that can be used by 
                                        a parent component to share data with the child component.

                Class Component -    state ful components

                    class Header extends React.Component {
                        constructor(props){
                            super(props);
                            this.state = {
                                pageTitle:"My First React App",
                                logo:"/imgs/logo.png"
                            };
                        }

                        render(){
                            return (
                                <header>
                                    <img src={this.state.logo} />
                                    <h1>{this.state.pageTitle}</h1>
                                </header>
                            );
                        }
                    }

                Function Component      state less components

                    is any JS function that accpets props as arg and returns a JSX element.

                    const Footer = props => (
                        <footer>
                            <strong> &copy; 2021CTS - All rights reserved </strong>
                        </footer>
                    );

                High Order Component

                    is any JS function that can accpet a component and 
                    return another component.

                    EmpList
                    DeptList
                    ProjectList

                    const Secured = component => (
                        userService.isUserLoggedIn()? component : Login 
                    );

                    const securedEmpList = Secured(EmpList)
                    const securedDeptList = Secured(DeptList)
                    const securedProjectsList = Secured(ProjectsList)



