const tags = ['Web App', 'Backend', 'DApp', 'All']
export default {
    name: 'works',
    title: 'Works',
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
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      // {
      //   name: 'tags',
      //   title: 'Tags',
      //  type:'array',
      //  of: [
      //    {
      //      name:'tag',
      //      title:'Tag',
      //      type:'string'
      //    }
      //  ]
      // },
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [{type: 'string'}],
       options: {
        list: tags.map(tag => {
          return {
            title: tag,
            value: tag
          }
        })
        // list: [
        //   {title: 'Web App', value: 'Web App'},
        //   {title: 'DApp', value: 'DApp'},
        //   {title: 'All', value: 'All'},
        //   {title: 'Private Home', value: 'privateHome'}
        // ]
      }
      },
     
    ],
  };