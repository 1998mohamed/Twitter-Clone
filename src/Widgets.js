import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1345083918127607810"} />

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="1907mohamad"
                  options={{ height: 400 }}
                />

                 <TwitterShareButton
                   url={"https://facebook.com/1907mohamad"}
                   options={{ text: "#reactjs is awesome", via: "1907mohamed" }}
                />
            </div>
        </div>
    )
}

export default Widgets;
