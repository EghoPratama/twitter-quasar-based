import moment from "moment"
export default function () {
  return {
    tweet_list: [
      {
        id: 1,
        pict: 'https://cdn.quasar.dev/img/boy-avatar.png',
        account_name: 'Orang Asing',
        user_name: '@john_doe',
        tweet: 'Why always me??',
        date_time: moment().format("DD MMMM YYYY, h:mm:ss a")
      },
      {
        id: 2,
        pict: 'https://cdn.quasar.dev/img/boy-avatar.png',
        account_name: 'Orang Asing',
        user_name: '@john_doe',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscit elit',
        date_time: moment().format("DD MMMM YYYY, h:mm:ss a")
      },
      {
        id: 3,
        pict: 'https://cdn.quasar.dev/img/avatar2.jpg',
        account_name: 'Brunhilde Panswick',
        user_name: '@bpanswick4',
        tweet: 'I will be in your neighborhood doing errands this weekend. Do you want to grab brunch?',
        date_time: moment().format("DD MMMM YYYY, h:mm:ss a")
      },
      {
        id: 4,
        pict: 'https://cdn.quasar.dev/img/avatar6.jpg',
        account_name: 'Winfield Stapforth',
        user_name: '@wstapforth5',
        tweet: 'Can we schedule a call for tomorrow?',
        date_time: moment().format("DD MMMM YYYY, h:mm:ss a")
      }
    ],

    trending_list: [
      {
        id: 1,
        topic: 'Anime . Trending',
        trend: '#ONEPIECE1053',
        tweet_count: '6.457 tweets'
      },
      {
        id: 2,
        topic: 'Beauty . Trending',
        trend: 'SkinCare',
        tweet_count: '19K tweets'
      },
      {
        id: 3,
        topic: 'Music . Trending',
        trend: 'Sheila on 7',
        tweet_count: '22.9K tweets'
      },
      {
        id: 4,
        topic: 'Sport . Trending',
        trend: '#AFCQualifiers2023',
        tweet_count: '5.687 tweets'
      },
      {
        id: 5,
        topic: 'Politics . Trending',
        trend: 'Turunkan Harga',
        tweet_count: '6.457 tweets'
      }
    ]
  }
}
