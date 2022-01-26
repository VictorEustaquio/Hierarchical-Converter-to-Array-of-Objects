
# Conversor Hierárquico para Array de Objetos - Hierarchical Converter to Array of Objects 
## Docker-compose
### Cria a interface network e containers indicados no arquivo docker-compose.yml. 
```
$ docker-compose up -d
```

### Listar as redes existentes incluindo a rede mongo-compose-network foi gerada através do docker-compose.yml
``` 
$ docker network ls
```

### Listar os containers - ( List containers )
``` 
$ docker-compose ps
```
#
## MongoDB
#### Arquivo de Backup com dados para teste - ( Backup file with test data )
- [file_system.json](/file_system.json)
#### Você pode optar por usar os dados do seguinte arquivo se preferir:
- [expected_input.js](/expected_input.js)
#
## Node.js
### Instalando as dependencias
```
$ npm install
```

### Iniciar
```
$ npm run start
```
#
## Resultados
> Dados de entrada 
- [expected_input.js](/expected_input.js)
```
[
  {
    _id: '6155bbbc84cfce5311f5a939',
    name: 'DAE',
    level: 'Tipo-Documento',
    isDirectory: true,
    parent: '6155bbbc84cfce5311f5a938',
    root: 1
  },
  {
    _id: '6155bbbc84cfce5311f5a93a',
    name: '2021',
    level: 'Ano',
    isDirectory: true,
    parent: '6155bbbc84cfce5311f5a939',
    root: 1
  },
  {
    _id: '6155bbbc84cfce5311f5a93b',
    name: 'Fevereiro',
    level: 'Mes',
    isDirectory: true,
    parent: '6155bbbc84cfce5311f5a93a',
    root: 1
  },
  {
    _id: '6155bbbc84cfce5311f5a93c',
    name: '92248978-DAE A DO NASCIMENTO.pdf',
    level: 'Arquivo',
    isDirectory: false,
    parent: '6155bbbc84cfce5311f5a93b',
    root: 1
  },
  {
    _id: '6155bbbd84cfce5311f5a93d',
    name: 'DAS',
    level: 'Tipo-Documento',
    isDirectory: true,
    parent: '6155bbbc84cfce5311f5a938',
    root: 1
  },
  {
    _id: '6155bbbd84cfce5311f5a93e',
    name: '2021',
    level: 'Ano',
    isDirectory: true,
    parent: '6155bbbd84cfce5311f5a93d',
    root: 1
  },
  {
    _id: '6155bbbd84cfce5311f5a93f',
    name: 'Fevereiro',
    level: 'Mes',
    isDirectory: true,
    parent: '6155bbbd84cfce5311f5a93e',
    root: 1
  }
]
```

> Dados de saída
- [expected_output.js](/expected_output.js)
```
[
    {
        "_id": "6155bbbc84cfce5311f5a939",
        "name": "DAE",
        "level": "Tipo-Documento",
        "isDirectory": true,
        "parent": "6155bbbc84cfce5311f5a938",
        "root": 1,
        "items": [
            {
                "_id": "6155bbbc84cfce5311f5a93a",
                "name": "2021",
                "level": "Ano",
                "isDirectory": true,
                "parent": "6155bbbc84cfce5311f5a939",
                "root": 1,
                "items": [
                    {
                        "_id": "6155bbbc84cfce5311f5a93b",
                        "name": "Fevereiro",
                        "level": "Mes",
                        "isDirectory": true,
                        "parent": "6155bbbc84cfce5311f5a93a",
                        "root": 1,
                        "items": [
                            {
                                "_id": "6155bbbc84cfce5311f5a93c",
                                "name": "92248978-DAE.pdf",
                                "level": "Arquivo",
                                "isDirectory": false,
                                "parent":"6155bbbc84cfce5311f5a93b",
                                "root": 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "6155bbbd84cfce5311f5a93d",
        "name": "DAS",
        "level": "Tipo-Documento",
        "isDirectory": true,
        "parent": "6155bbbc84cfce5311f5a938",
        "root": 1,
        "items": [
            {
                "_id": "6155bbbd84cfce5311f5a93e",
                "name": "2021",
                "level": "Ano",
                "isDirectory": true,
                "parent": "6155bbbd84cfce5311f5a93d",
                "root": 1,
                "items": [
                    {
                        "_id": "6155bbbd84cfce5311f5a93f",
                        "name": "Fevereiro",
                        "level": "Mes",
                        "isDirectory": true,
                        "parent": "6155bbbd84cfce5311f5a93e",
                        "root": 1
                    }
                ]
            }
        ]
    }
]
```

## Utilidade
Após a conversão dos dados, você poderar implementar gerenciadores e explorardores de arquivos com facilidade, utilizando bibliotecas como: 
- [dxFileMnager](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxFileManager/)


