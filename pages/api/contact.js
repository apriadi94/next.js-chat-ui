// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json([
        { id: 2, name: "Anggara Banyumas", profileImage: "https://picsum.photos/id/15/200/300" },
        { id: 3, name: "Agung", profileImage: "https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc" },
        { id: 4, name: "Maria", profileImage: "https://picsum.photos/id/20/200/300" },
        { id: 5, name: "Ridwan", profileImage: "https://picsum.photos/id/21/200/300" },
        { id: 6, name: "Viko", profileImage: "https://picsum.photos/id/22/200/300" }
    ])
  }
  