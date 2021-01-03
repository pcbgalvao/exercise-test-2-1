import React from 'react';

const menuOptions = ["Bands", "Albuns", "Songs"];

class Menu extends React.Component {    
    state = {
        activeMenuOption : 0
    }  
    
    onOptionClick = (event) => {
      event.preventDefault();
      console.log (event);
      console.log (event.target);      
    }

    render () {
        return (
            <div className="ui three item menu ">
                <div className="">                      
                      <div value="primeiro">
                        <div className="ui button"                             
                          onClick={this.onOptionClick}>
                            {menuOptions[0]}
                        </div>
                      </div>
                      <div value={1}>
                        <button value="segundo" className="ui button"                                                       
                          onClick={this.onOptionClick}>
                              {menuOptions[1]}
                        </button>
                  </div>                             
                </div>
            </div>
        )
    };
};

export default Menu;