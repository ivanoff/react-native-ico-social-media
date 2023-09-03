declare module 'react-native-ico-social-media' {
    import { ReactNode } from 'react';

    type iconNames = 'youtube' |
      'yelp' |
      'wordpress' |
      'wikipedia' |
      'whatsapp' |
      'vine' |
      'vimeo' |
      'twitter' |
      'tumblr' |
      'trello' |
      'stumbleupon' |
      'spotify' |
      'soundcloud' |
      'snapchat' |
      'skype' |
      'shutterstock' |
      'scribd' |
      'reddit' |
      'quora' |
      'plaxo' |
      'pinterest' |
      'periscope' |
      'paypal' |
      'path' |
      'myspace' |
      'medium' |
      'linkedin' |
      'kickstarter' |
      'instagram' |
      'html-5' |
      'howcast' |
      'hi5' |
      'google-plus' |
      'foursquare' |
      'flickr' |
      'facebook' |
      'etsy' |
      'envato' |
      'dropbox' |
      'dribbble' |
      'deviantart' |
      'delicious' |
      'creative-market' |
      'buffer' |
      'box' |
      'bing' |
      'behance' |
      'android' |
      'amazon';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

