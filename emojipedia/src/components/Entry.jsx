import React from "react";

function Entry(props) {
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={props.caption}>
              {props.emoji}
            </span>
            <span>{props.caption}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>

    );
}

export default Entry;