const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3001


//memanggil ejs template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('landing', { 
    title: 'Halaman Home',
    layout: 'partials/landing',
  });
})


app.get('/home', (req, res) => {
  res.render('index', { 
    title: 'Home',
    layout: 'partials/main-layouts',
  });
})


app.get('/about', (req, res) => {
  // res.send('Hello World!')
  res.render('about', { 
    title: 'Halaman About',
    layout: 'partials/about'
  });
})
// 
app.get('/contact', (req, res) => {
  
  res.render('contact', { 
    title: 'Halaman Contact',
    layout: 'partials/main-layouts',
  });
})

app.get('/wisata', (req, res) => {
  
  res.render('wisata', { 
    title: 'Halaman Wisata',
    layout: 'partials/main-layouts',
  });
})

app.get('/profile', (req, res) => {
  
  res.render('profile', { 
    title: 'Profile Kecataman',
    layout: 'partials/main-layouts',
  });
})

app.get('/berita', (req, res) => {
  
  res.render('berita', { 
    title: 'Halaman Berita',
    layout: 'partials/main-layouts',
  });
})

app.get('/gallery', (req, res) => {
  
  res.render('gallery', { 
    title: 'Halaman gallery',
    layout: 'partials/main-layouts',
  });
})

app.get('/layanan', (req, res) => {
   
  res.render('layanan', { 
    title: 'Halaman Layanan',
    layout: 'partials/main-layouts',
  });
})

app.get('/ktp', (req, res) => {
   
  res.render('ktp', { 
    title: 'Halaman ktp',
    layout: 'partials/main-layouts',
  });
})

app.get('/kknasional', (req, res) => {
   
  res.render('kknasional', { 
    title: 'Halaman ktp',
    layout: 'partials/main-layouts',
  });
})

  app.get('/proposalbantuan', (req, res) => {
   
    res.render('proposalbantuan', { 
      title: 'Halaman proposal',
      layout: 'partials/main-layouts',
    });
  })

    app.get('/struktur', (req, res) => {
   
      res.render('struktur', { 
        title: 'Halaman struktur',
        layout: 'partials/main-layouts',
      });
    })

    app.get('/proposalkelompok', (req, res) => {
   
      res.render('proposalkelompok', { 
        title: 'Halaman struktur',
        layout: 'partials/main-layouts',
      });
    })


    app.get('/suratpindahpenduduk', (req, res) => {
   
      res.render('suratpindahpenduduk', { 
        title: 'Halaman struktur',
        layout: 'partials/main-layouts',
      });
    })
    

  

app.get('/proposalbeasiswa', (req, res) => {

  res.render('proposalbeasiswa' ,{
    title: 'Halaman beasiswa',
    layout: 'partials/main-layouts',
  });


})

app.get('/nagari', (req, res) => {

  res.render('nagari' ,{
    title: 'Halaman nagari',
    layout: 'partials/main-layouts',
  });


})

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})