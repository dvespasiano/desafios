const { string } = require("yargs");


(function () {
    var el = wp.element.createElement,
        RichText = wp.blockEditor.RichText,
        title = wp.blockEditor.RichText;

    wp.blocks.registerBlockType(
        'blocos-de-exemplo/get-api',
        {
            title: 'Get-api',
            icon: 'database-import',
            category: 'common',
            attributes: {
                data: {
                    type: {
                        titulo: 'string',
                        descricao: 'string',
                        img: []
                    },
                    source: 'html',
                    selector: 'details',
                },
            },

            edit: withSelect((select) => {
                return {
                    data: select('http://localhost:8012/wp-json/wp/v2/items').receiveUserRoles(),
                };
            }),
            function(props) {
                var conteudo = props.attributes.conteudo;
                function onChangeConteudo(novoConteudo) {
                    console.log(novoConteudo)
                    props.setAttributes({ conteudo: novoConteudo });
                }
                return el('details',
                    el(
                        'input',
                        {
                            type: 'text',
                            placeholder: 'Titulo',
                            value: title,
                            onChange: updateTitle,
                        }
                    ),
                );
            },

            save: function (props) {
                console.log(props)
                return el('details',
                    el(title.Content,
                        {
                            tagName: 'summary',
                            value: props.attributes.title
                        }),
                    el(
                        RichText.Content,
                        {
                            tagName: 'p',
                            value: props.attributes.conteudo
                        }
                    )
                )
            },
        }
    );
}());