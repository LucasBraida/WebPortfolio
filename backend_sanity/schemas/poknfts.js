export default {
    name: 'pokNFTs',
    title: 'PoKNFTs',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'openseaLink',
        title: 'Opensea Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'file',
        options: {
          hotspot: true,
        },
      },
     
    ],
  };