let videos = [
    {
        title: "First Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];   

export const trending = (req, res) => {
return res.render("home", {pageTilte: "Home", videos })
};
export const watch = (req, res) => {
 const { id } = req.params;
 const video = videos[id-1];
 return res.render("watch", {pageTilte: `Watching: ${video.title}`, video });
};
export const edit = (req, res) => {
   const { id } = req.params;
   const video = videos[id-1];
   return res.render("edit", {pageTilte:`Editing: ${video.title}`});
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");