import React from 'react'

function Welcome() {
    return (
        <div className="welcome">
            <img alt="sketch" src="/images/sketch.png" />

            <h1>EIKA'S shopping list</h1>

            <p>Welcome to EIKA'S shopping list. Here you will be
               able to create a todo list with for the furniture you</p>

            <p>want to buy</p>

            <p>To get started press the Add new item button and a
                popup will ask you the name and the price of the
                item you want to add. You can also and an image
                after the item is added by touching the camera icon</p>
            <button className="btn-add">Add a new item</button>

        </div>
    )
}

export default Welcome
