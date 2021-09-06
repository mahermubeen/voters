import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { openNotif } from "../redux/reducers/members";
import { useState, useRef } from "react";

export default function Icon({ name }: { name: string }) {
  const dispatch = useDispatch();

  switch (name) {
    case "": {
      return <></>;
    }
    case "cv1": {
      return (
        <>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 11L8.5 1L0.999999 11"
              stroke="black"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }
    case "cv2": {
      return (
        <>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8.5 11L16 1"
              stroke="black"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }
    case "cdn": {
      return (
        <>
          <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.5 10.5L20 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }
    case "cup": {
      return (
        <>
          <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.5L10.5 1L1 10.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }
    case "trash": {
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="24" height="24" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0" transform="scale(0.00195312)" />
              </pattern>
              <image
                id="image0"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </>
      );
    }
    case "back": {
      return (
        <>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3143 2L2 13.1111M2 13.1111L13.3143 24.2222M2 13.1111H26"
              stroke="black"
              stroke-width="3"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }
    case "menu": {
      return (
        <>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="9" r="2" fill="black" />
            <circle cx="16" cy="16" r="2" fill="black" />
            <circle cx="16" cy="23" r="2" fill="black" />
          </svg>
        </>
      );
    }
    case "cehvdown": {
      return (
        <>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10 13L19 1"
              stroke="#717171"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    }

    case "bell": {
      return (
        <div className="notif-icon">
          <div className="notif-count">2</div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onClick={() => dispatch(openNotif())}
          >
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0)">
              <rect y="-3" width="32" height="39" fill="white" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0" transform="scale(0.00195312)" />
              </pattern>
              <image
                id="image0"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
}
