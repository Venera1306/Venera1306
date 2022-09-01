import React from 'react';

const AppHeader = ({liked, allPosts}) => {// это props

    return (
        <div className="app-header d-flex">
            <h1>
                Venera Ramazanova
            </h1>
            <h2> {allPosts} записи , из них понравилось {liked}
            </h2> 
        </div>
    )
}

export default AppHeader;
