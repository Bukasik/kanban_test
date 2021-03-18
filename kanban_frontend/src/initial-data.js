// export const data =[
//   {
//     id : "2527749",
//     title : "Backlog",
//     cards : [{ id : "470841411", title : "refactor"}, { id : "85535228", title : "more build"}]
//   },
//   {
//     id : "637046299",
//     title : "In progress",
//     cards : [{ id : "85535227", title : "learn React/RoR"}]},
//   {
//     id : "851722603",
//     title : "In test",
//     cards : [{ id : "840833390", title : "my test homework"}]
//   },
//   {
//     id : "271442091",
//     title : "Done",
//     cards : [{ id : "746228945", title : "create rails app"}]
//   }
//   ];

export default dataNew = {
  boardId: id,
  cards: [
    {
      id: '11', title: 'refactor', columnId: '1', pos: 1,
    },
    {
      id: '12', title: 'more build', columnId: '1', pos: 0,
    },
    {
      id: '13', title: 'learn React/RoR', columnId: '2', pos: 0,
    },
    {
      id: '14', title: 'my test homework', columnId: '3', pos: 0,
    },
    {
      id: '15', title: 'create rails app', columnId: '4', pos: 0,
    },
    {
      id: '16', title: 'next time', columnId: '1', pos: 2,
    },
  ],
  columns: [
    { id: '1', title: 'Backlog' },
    { id: '2', title: 'In progress' },
    { id: '3', title: 'In test' },
    { id: '4', title: 'Done' },
  ],
};
