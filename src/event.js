const now = new Date()

export default [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2020, 5, 0),
        end: new Date(2020, 5, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2020, 5, 7),
        end: new Date(2020, 5, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 5, 1, 0, 0, 0),
        end: new Date(2020, 5, 1, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2020, 5, 6, 0, 0, 0),
        end: new Date(2020, 5, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2020, 5, 9, 0, 0, 0),
        end: new Date(2020, 5, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2020, 5, 11),
        end: new Date(2020, 5, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2020, 5, 1, 10, 0, 0, 0),
        end: new Date(2020, 5, 1, 11, 0, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 5, 12, 12, 0, 0, 0),
        end: new Date(2020, 5, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2020, 5, 12, 14, 0, 0, 0),
        end: new Date(2020, 5, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2020, 5, 12, 17, 0, 0, 0),
        end: new Date(2020, 5, 12, 18, 0, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2020, 5, 12, 20, 0, 0, 0),
        end: new Date(2020, 5, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2020, 5, 13, 7, 0, 0),
        end: new Date(2020, 5, 13, 8, 0, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2020, 5, 17, 19, 0, 0),
        end: new Date(2020, 5, 18, 20, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2020, 5, 17, 20, 0, 0),
        end: new Date(2020, 5, 17, 21, 0, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2020, 5, 20, 18, 0, 0),
        end: new Date(2020, 5, 22, 19, 0, 0),
    },
    {
        id: 14,
        title: 'Music Time',
        start: new Date(2020, 5, 2, 18, 0, 0),
        end: new Date(2020, 5, 2, 19, 0, 0),
    },
    {
        id: 15,
        title: 'Point in Time Event',
        start: now,
        end: now,
    },
    {
        id: 16,
        title: 'Video Record',
        start: new Date(2020, 5, 3, 15, 0, 0),
        end: new Date(2020, 5, 3, 16, 0, 0),
    },
    {
        id: 17,
        title: 'Dutch Song Producing',
        start: new Date(2020, 5, 14, 16, 0, 0),
        end: new Date(2020, 5, 14, 17, 0, 0),
    },
    {
        id: 18,
        title: 'Itaewon Halloween Meeting',
        start: new Date(2020, 5, 14, 17, 0, 0),
        end: new Date(2020, 5, 14, 18, 0, 0),
    },
    {
        id: 19,
        title: 'Online Coding Test',
        start: new Date(2020, 5, 14, 18, 0, 0),
        end: new Date(2020, 5, 14, 19, 0, 0),
    },
    {
        id: 20,
        title: 'An overlapped Event',
        start: new Date(2020, 5, 14, 19, 0, 0),
        end: new Date(2020, 5, 14, 20, 0, 0),
    },
    {
        id: 21,
        title: 'Phone Interview',
        start: new Date(2020, 5, 14, 21, 0, 0),
        end: new Date(2020, 5, 14, 22, 0, 0),
    },
    {
        id: 22,
        title: 'Cooking Class',
        start: new Date(2020, 5, 15, 17, 0, 0),
        end: new Date(2020, 5, 15, 18, 0, 0),
    },
    {
        id: 23,
        title: 'Go to the gym',
        start: new Date(2020, 5, 15, 18, 0, 0),
        end: new Date(2020, 5, 15, 19, 0, 0),
    },
    {
        id: 23,
        title: 'Go to test',
        start: new Date(2020, 5, 1, 15, 0, 0),
        end: new Date(2020, 5, 1, 16, 0, 0),
    },
]