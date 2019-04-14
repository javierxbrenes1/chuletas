import React, {useState} from 'react'
import MaterialTable from 'material-table';    
const Table = () => {

    const datax = [{
        name: 'carolina', lastName: 'mora', genero: '0'
    },{name: 'javier', lastName: 'brenes', genero: '0'},{
        name: 'rafael', lastName: 'angel', genero: '0'
    }] 
    ;
    const [data, setData] = useState(datax);
    const columns = [
        {title: 'name', field: 'name'},
        {title: 'last name', field: 'lastName', 
            // editComponent: props => (<input type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />)
        },
        {title: 'genero', field: 'genero', editComponent: props => (<select value={props.value} onChange={e => props.onChange(e.target.value)}>
            <option value="0">Masculino</option>
            <option value="1">Femenino</option>
        </select>)}
    ]

    


    const editable={
       // onRowAdd: newData => new Promise((resolve, reject) => {console.log(newData); data.push(newData);  setData([...data]);
      //  resolve();
      //  }),
        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {console.log(newData, oldData);
         resolve();}
        ),
       // onRowDelete: oldData => new Promise((resolve, reject) => console.log(oldData))
    }

  return (
    <div>
      <MaterialTable title="persons"
      columns={columns}
        data={data}
        editable={editable}
        options={{actionsColumnIndex: -1}}
        localization={{
            pagination: {
                labelDisplayedRows: '{from}-{to} de {count}',
                labelRowsPerPage: 'Filas por pagina',
                firstAreaLabel: 'Primer pagina',
                firstTooltip: 'Primer pagina',
                previousTooltip: 'Pagina anterior',
                previousAreaLabel: 'Pagina anterior',
                nextTooltip: 'Pagina siguiente',
                nextAreaLabel: 'Pagina siguiente',
                lastTooltip: 'Ultima pagina',
                lastAreaLabel: 'Ultima pagina',
                labelRowsSelect: 'filas'
            },
            toolbar: {
                nRowsSelected: '{0} fila(s) seleccionadas',
                showColumnsAriaLabel: 'Mostrar Columnas',
                showColumnsTitle: 'Mostrar Columnas',
                exportTitle: 'Exportar',
                exportAriaLabel: 'Exportar',
                exportName: 'Exportar como CSV',
                searchTooltip: 'Buscar'
            },
            header:{
                actions: 'Acciones'
            }, 
            body: {
                emptyDataSourceMessage: 'No hay datos',
                filterRow: {
                    filterTooltip: 'Filtrar'
                }
            }
        }
        }
      />
    </div>
  )
}

export default Table
