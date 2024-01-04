const projects = [
    {
        id: 1,
        title: 'NYC Uber Stats',
        category: 'Python',
        categoryId:1,
        subtitle: 'Uber analysis travels in NYC',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/project_01_uber_stats/',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/project_01_uber_stats',
        link4:'https://drive.google.com/file/d/1RxuquxWbgNFSUiW7c6Z5EF7wgHr1qmiG/view?usp=sharing'
    },
    {
        id: 2,
        title: 'BTC Price',
        category: 'Python',
        categoryId:2,
        subtitle: 'Bitcoin price analysis.',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/project_02_bitcoin_stats',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/project_02_bitcoin_stats',
        link4:'https://drive.google.com/file/d/1JXQrwm9vYiaV6-rt91dZrocrHq_EkZ_a/view?usp=sharing'
    },
    {
        id: 3,
        title: 'Hotel stats',
        category: 'Python',
        categoryId:3,
        subtitle: 'Hotel booking analysis.',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/project_03_booking_hotel_stats',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/project_03_booking_hotel_stats',
        link4:'https://drive.google.com/file/d/1JD_oN1RT2z99klcXpvFeb45yZKR7bFSE/view?usp=sharing'
    },
    {
        id: 4,
        title: 'COVID-19 tracker',
        category: 'Python',
        categoryId:4,
        subtitle: 'COVID-19 stats around world.',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/project_04_covid-19_stats',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/project_04_covid-19_stats',
        link4:'https://drive.google.com/file/d/19X56Or3f7bqE6L3uRj9_oTZPIciXeqLn/view?usp=sharing'
    },
    {
        id: 5,
        title: 'Amazon reviews',
        category: 'Python',
        categoryId:5,
        subtitle: 'AMZ customers reviews stats',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/project_05_amazon_review_stats',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/project_05_amazon_review_stats',
        link4:'https://drive.google.com/file/d/1vJRrHaEEsQuhrXPjhs_ZasVOi514kgTX/view?usp=sharing'
    },
    {
        id: 6,
        title: 'Discount Mart',
        category: 'Tableau',
        categoryId:6,
        subtitle: 'Analitycs sales dashboard.',
        medium: false,
        git: false,
        link1:'https://public.tableau.com/app/profile/lucas.singh/viz/01_discount_mart_project/DiscountMartDashborad',
        link2:'https://www.google.com/',
        link3:'https://www.google.com/',
        link4:'https://drive.google.com/file/d/1eHZOgirVeAa6_9k9KIK9sZbjjR36IoMi/view?usp=sharing'
    },
    {
        id: 7,
        title: 'Green shop',
        category: 'Tableau',
        categoryId:7,
        subtitle: 'Analitycs HR dashboard.',
        medium: false,
        git: false,
        link1:'https://public.tableau.com/app/profile/lucas.singh/viz/02_green_destination_project/Dashboard1',
        link2:'https://www.google.com/',
        link3:'https://www.google.com/',
        link4:'https://drive.google.com/file/d/1LKbYVE2KEmcNBN0JpemZyF-teK6KM-wo/view?usp=sharing'
    },
    {
        id: 8,
        title: 'Paper factory',
        category: 'Tableau',
        categoryId:8,
        subtitle: 'Analitycs orders dashboard.',
        medium: false,
        git: false,
        link1:'https://public.tableau.com/app/profile/lucas.singh/viz/02_green_destination_project/Dashboard1',
        link2:'https://www.google.com/',
        link3:'https://www.google.com/',
        link4:'https://drive.google.com/file/d/1LKbYVE2KEmcNBN0JpemZyF-teK6KM-wo/view?usp=sharing'
    },
    {
        id: 9,
        title: 'Superstore',
        category: 'Tableau',
        categoryId:9,
        subtitle: 'Sales agent analitycs.',
        medium: false,
        git: false,
        link1:'https://public.tableau.com/app/profile/lucas.singh/viz/04_superstore_project/04_superstore_project',
        link2:'https://www.google.com/',
        link3:'https://www.google.com/',
        link4:'https://drive.google.com/file/d/13X0FWvQfquhfRYFJBvlVb5hEaACcvAgk/view?usp=sharing'
    },
    {
        id: 10,
        title: 'NYC incidents',
        category: 'Tableau',
        categoryId:10,
        subtitle: 'Icidents of NYC stats.',
        medium: false,
        git: false,
        link1:'https://public.tableau.com/app/profile/lucas.singh/viz/05_NY_inicidents_stats_project/05_NYC_incidents_stats_project',
        link2:'https://www.google.com/',
        link3:'https://www.google.com/',
        link4:'https://drive.google.com/file/d/1oAHfB43gg5YkJPcxoX8XEJBMZ7_Fgba9/view?usp=sharing'
    },
    {
        id: 11,
        title: 'Finances Dashboard',
        category: 'Power BI',
        categoryId:11,
        subtitle: 'Personal finances tracking',
        medium: false,
        git: false,
        link1:'https://app.powerbi.com/view?r=eyJrIjoiN2ZkZmNiOTItZDA2OC00YzA0LTlhZGEtYjA5Nzk3ZjNkMmYyIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link2:'https://www.google.com/',
        link3:'https://app.powerbi.com/view?r=eyJrIjoiN2ZkZmNiOTItZDA2OC00YzA0LTlhZGEtYjA5Nzk3ZjNkMmYyIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link4:'https://drive.google.com/file/d/1d2XATe0KkdD9D3YN_H47sU9YoGMOdDZD/view?usp=sharing'
    },
    {
        id: 12,
        title: 'Cycles Dashboard',
        category: 'Power BI',
        categoryId:12,
        subtitle: 'Cycles sales tracking',
        medium: false,
        git: false,
        link1:'https://app.powerbi.com/view?r=eyJrIjoiOTRiODA2ZmYtNWNlZi00MjhlLTk1ZjktYThlZTA4OTAyNzVhIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link2:'https://www.google.com/',
        link3:'https://app.powerbi.com/view?r=eyJrIjoiOTRiODA2ZmYtNWNlZi00MjhlLTk1ZjktYThlZTA4OTAyNzVhIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link4:'https://drive.google.com/file/d/1UImYlS4nksL9yB8CnA-NQ3heLVytyLNS/view?usp=sharing'
    },
    {
        id: 13,
        title: 'Sales dashboard',
        category: 'Power BI',
        categoryId:13,
        subtitle: 'Statics by company departments',
        medium: false,
        git: false,
        link1:'https://app.powerbi.com/view?r=eyJrIjoiYTgxZGU4NmYtYzNjYi00Mjc0LWEwNGUtYjM5OTBkMTlkZGIwIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link2:'https://www.google.com/',
        link3:'https://app.powerbi.com/view?r=eyJrIjoiYTgxZGU4NmYtYzNjYi00Mjc0LWEwNGUtYjM5OTBkMTlkZGIwIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link4:'https://drive.google.com/file/d/1Yp99CDxc3rOyb9Z2tRxr7A5cHfn48izm/view?usp=sharing'
    },
    {
        id: 14,
        title: 'Accidents Dashboard',
        category: 'Power BI',
        categoryId:14,
        subtitle: 'Tracking accidents in NYC',
        medium: false,
        git: false,
        link1:'https://app.powerbi.com/view?r=eyJrIjoiNDQ3YjRlMTctY2ExZi00NTJjLTg5MjEtNmY2YjA4OTgwYzllIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link2:'https://www.google.com/',
        link3:'https://app.powerbi.com/view?r=eyJrIjoiNDQ3YjRlMTctY2ExZi00NTJjLTg5MjEtNmY2YjA4OTgwYzllIiwidCI6ImE4NGEzNjI2LTM4NDItNDE5Ni1iYTdmLWM2NWM5NzE0NzlkNiIsImMiOjR9',
        link4:'https://drive.google.com/file/d/1nhy4jA_yiXxD2wZ3mgJzhYgFTFL5k6qx/view?usp=sharing'
    },
    {
        id: 15,
        title: 'FIFA 19 stats',
        category: 'Data Science',
        categoryId:15,
        subtitle: 'Analizing players of FIFA 19',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/fifa_stats',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/fifa_stats',
        link4:'https://drive.google.com/file/d/1ew_BY-rhweDD4EZmCvfNc4VnLci90HKs/view?usp=sharing'
    },
    {
        id: 16,
        title: 'Startups stats',
        category: 'Data Science',
        categoryId:16,
        subtitle: 'Analysis startups in India',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/02_start-uo_stats.',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/02_start-uo_stats',
        link4:'https://drive.google.com/file/d/1PBch39iblw89zqtGwt44PvBCACvjA5QC/view?usp=sharing'
    },
    {
        id: 17,
        title: 'Movie stats',
        category: 'Data Science',
        categoryId:17,
        subtitle: 'Movie recommender analysis.',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/03_movie-recommender',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/03_movie-recommender',
        link4:'https://drive.google.com/file/d/1e8AlFA8q1uXVaiPqxNDy9eBZAL76KRAs/view?usp=sharing'
    },
    {
        id: 18,
        title: 'Mall Customers',
        category: 'Data Science',
        categoryId:18,
        subtitle: 'Cluster segment by customer',
        medium: false,
        git: true,
        link1:'https://github.com/lucassingh/04-customers-analysis',
        link2:'https://www.google.com/',
        link3:'https://github.com/lucassingh/04-customers-analysis',
        link4:'https://drive.google.com/file/d/1HLLeYX3BQyLEM2vDpFmq5flb2p1S6xsV/view?usp=sharing'
    }
];

export default projects;
