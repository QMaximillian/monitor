import React from 'react'

export default function Landing(props){
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio sapien, blandit et mi eget, euismod vestibulum est. Nam dictum, eros sed sagittis sagittis, lorem odio sodales diam, et egestas justo dui non elit. Donec faucibus quis orci vel molestie. Morbi lobortis, neque et vestibulum suscipit, purus mi vestibulum mi, quis pharetra nisi dolor non ex.";
       
    return (
      <div className="border border-m-purple-500 h-full w-full px-4">
        <div className="flex px-4">
            <span className="mx-2">Actor's Equity</span>
            <span className="mx-2">Drama Book Shop</span>
        </div>
        <img
          className="w-full opacity-25"
          alt="Woman auditioning a man for a role"
          src="https://www.stagemilk.com/wp-content/uploads/2017/03/first_theatre_audition-630x300.jpg"
        />
        <div className="flex w-full">
          <div className="w-1/3 text-center">
            <div>MONITORS</div>
            <div>{loremIpsum}</div>
          </div>

          <div className="w-1/3 text-center border border-m-purple border-t-0 border-b-0">
            <div>ACTORS</div>
            <div>{loremIpsum}</div>
          </div>
          <div className="w-1/3 text-center">
              <div>THEATERS</div>
              <div>{loremIpsum}</div>
          </div>
        </div>
      </div>
    );
}

