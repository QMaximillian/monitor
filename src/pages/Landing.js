import React from 'react'

export default function Landing(props){
         
    return (
      <div className="h-full w-full px-4">
        <div className="flex px-4">
          <span className="mx-2">Actor's Equity</span>
          <span className="mx-2">Drama Book Shop</span>
        </div>
        <img
          className="w-full opacity-25"
          alt="Woman auditioning a man for a role"
          src="https://www.stagemilk.com/wp-content/uploads/2017/03/first_theatre_audition-630x300.jpg"
        />
        <div className="flex w-full h-auto">
          <div className="w-1/3 text-center">
            <div className="text-2xl">MONITORS</div>
            <div className="text-lg border-0 border-b-2 mx-4">
              Monitor Auditions from Beginning To End
            </div>
            <div className="text-base">
              Each audition has a control center, allowing you to manage and
              update actors during the audition day
            </div>
          </div>

          <div className="w-1/3 text-center border border-m-purple border-t-0 border-b-0">
            <div className="text-2xl">ACTORS</div>
            <div className="text-lg border-0 border-b-2  mx-4">
              Find and Submit For Auditions
            </div>
            <div className="text-base">
              Directly Search and apply for auditions
            </div>
          </div>
          <div className="w-1/3 text-center">
            <div className="text-2xl">THEATERS</div>
            <div className="text-lg border-0 border-b-2  mx-4">
              Setup and Orchestrate Auditions
            </div>
            <div className="text-base">
              Cut the time to cast your show in half, and communicate
              effectively during auditions
            </div>
          </div>
        </div>
      </div>
    );
}

