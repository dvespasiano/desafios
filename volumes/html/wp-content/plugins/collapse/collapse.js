(function () {
    var el = wp.element.createElement,
        RichText = wp.blockEditor.RichText,
        title = wp.blockEditor.RichText;

    wp.blocks.registerBlockType(
        'blocos-de-exemplo/collapse',
        {
            title: 'Collapse',
            icon: 'arrow-left',
            category: 'common',
            attributes: {
                title: {
                    type: 'string',
                    source: 'html',
                    selector: 'summary',
                },
                conteudo: {
                    type: 'string',
                    source: 'html',
                    selector: 'details',
                },
            },

            edit: function (props) {
                function updateTitle(event) {
                    props.setAttributes({ title: event.target.value });
                }
                var conteudo = props.attributes.conteudo;
                function onChangeConteudo(novoConteudo) {
                    console.log(novoConteudo)
                    props.setAttributes({ conteudo: novoConteudo });
                }
                return el('details',
                    el('summary',
                        el(
                            'input',
                            {
                                type: 'text',
                                placeholder: 'Titulo',
                                value: title,
                                onChange: updateTitle,
                            }
                        )),
                    el(
                        RichText,
                        {
                            tagName: 'p',
                            onChange: onChangeConteudo,
                            value: conteudo,
                            placeholder: "Insira o seu texto"
                        }
                    )
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