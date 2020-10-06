(function () {
    var el = wp.element.createElement,
        RichText = wp.editor.RichText;

    wp.blocks.registerBlockType(
        'blocos-de-exemplo/hello-world',
        {
            title: 'Hello World',
            icon: 'admin-comments',
            category: 'common',

            attributes: {
                conteudo: {
                    type: 'string',
                    source: 'html',
                    selector: 'hl',
                },
            },

            edit: function (props) {
                return el(
                    RichText,
                    {
                        tagName: 'h4',
                        className: props.className,
                        value: 'Hello World!',
                    }
                );
            },

            save: function (props) {
                return el(
                    RichText.Content,
                    {
                        tagName: 'h4',
                        value: 'Hello World!',
                    }
                );
            },
        }
    );
}());