/* eslint-disable guard-for-in */
const getComp = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
  .then(res => res.data)

const getProd = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
  .then(res => res.data)


const generateCompanyInfo = (arrComp) => {
  const getTableResult = document.querySelector('#tableInfo')
  arrComp.forEach(elem => {
    let html = `<tr>`

    for (let key in elem) {
      html += `<td>${elem[key]}</td>`
    }
    html += `</tr>`
    getTableResult.innerHTML += html
  })
}

Promise.all([getComp, getProd])
  .then((response) => {
    const companies = response[0]
    const products = response[1]

    let companiesResultHtml = `
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th >Name</th>
          <th>Phone</th>
          <th>State</th>
          <th>CatchPhrase</th>
          <th>CreatedAt</th>
          <th>UpdatedAt</th>
        </tr>
      </thead>
      <tbody id='tableInfo'>

      </tbody>
    </table>
    `

    title.innerHTML = 'Companies'

    results.innerHTML = companiesResultHtml

    generateCompanyInfo(companies)


  })

  window.addEventListener('hashchange', () => {
    let id = window.location.hash.slice(1)
    console.log(id)
    generateCompanyInfo(id)
  })
