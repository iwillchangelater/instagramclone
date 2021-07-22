import React from "react";
import { useParams } from "react-router";
export default function Redirect() {
  const { id } = useParams();
  switch (id) {
    case "1":
      window.location.href = "https://about.instagram.com/";
      break;
    case "2":
      window.location.href = "https://about.instagram.com/blog";
      break;
    case "3":
      window.location.href = "https://about.instagram.com/about-us/careers";
      break;
    case "4":
      window.location.href = "https://developers.facebook.com/docs/instagram";
      break;
    case "5":
      window.location.href = "https://help.instagram.com/519522125107875";
      break;
    case "6":
      window.location.href = "https://developers.facebook.com/docs/instagram";
      break;
    case "7":
      window.location.href = "https://help.instagram.com/519522125107875";
      break;
    case "8":
      window.location.href = "https://about.instagram.com/";
      break;
    case "9":
      window.location.href = "https://www.instagram.com/directory/hashtags/";
      break;
    case "10":
      window.location.href = "https://www.instagram.com/explore/locations/";
      break;
    case "11":
      window.location.href = "https://help.instagram.com/581066165581870";
      break;
    case "12":
      window.location.href = "https://help.instagram.com/519522125107875";
      break;
    case "13":
      window.location.href =
        "https://help.instagram.com/1896641480634370?ref=ig";
      break;
    case "14":
      window.location.href =
        "https://apps.apple.com/app/instagram/id389801252?vt=lo";
      break;
    case "15":
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=18A0B3DA-4BC6-4921-B580-DB44C4DC38FA&utm_content=lo&utm_medium=badge";
      break;
    default:
      window.location.href =
        "https://api.instagram.com/v1/users/self/feed?access_token=";
  }
  return <div></div>;
}
