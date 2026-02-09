## MODULE: SALES & PURCHASE SETTINGS

| Title                           | Description                                                         | Type                     | Default | Payload Key                       | Default Value |
| ------------------------------- | ------------------------------------------------------------------- | ------------------------ | ------- | --------------------------------- | ------------- |
| Sales Quotation Numbering Mode  | Controls whether quotation numbering is automatic or manual.        | Dropdown (auto / manual) | manual  | sales_quatation_invoice_sequence  | manual        |
| Enable Sales Quotation Prefix   | Activates prefix usage for quotation numbering.                     | Toggle (on / off)        | off     | sales_quatation_prefix_enable     | off           |
| Sales Quotation Prefix          | Text added before quotation number when enabled.                    | Input                    | empty   | sales_quatation_prefix            | ""            |
| Enable Sales Quotation Suffix   | Activates suffix usage for quotation numbering.                     | Toggle (on / off)        | off     | sales_quatation_sufix_enable      | off           |
| Sales Quotation Suffix          | Text added after quotation number when enabled.                     | Input                    | empty   | sales_quatation_sufix             | ""            |
| Sales Order Numbering Mode      | Controls whether sales order numbering is automatic or manual.      | Dropdown (auto / manual) | manual  | sales_order_invoice_sequence      | manual        |
| Enable Sales Order Prefix       | Activates prefix usage for sales order numbering.                   | Toggle (on / off)        | off     | sales_order_prefix_enable         | off           |
| Sales Order Prefix              | Text added before sales order number when enabled.                  | Input                    | empty   | sales_order_prefix                | ""            |
| Enable Sales Order Suffix       | Activates suffix usage for sales order numbering.                   | Toggle (on / off)        | off     | sales_order_sufix_enable          | off           |
| Sales Order Suffix              | Text added after sales order number when enabled.                   | Input                    | empty   | sales_order_sufix                 | ""            |
| Sales Invoice Numbering Mode    | Controls whether sales invoice numbering is automatic or manual.    | Dropdown (auto / manual) | manual  | sales_invoice_invoice_sequence    | manual        |
| Enable Sales Invoice Prefix     | Activates prefix usage for sales invoice numbering.                 | Toggle (on / off)        | off     | sales_invoice_prefix_enable       | off           |
| Sales Invoice Prefix            | Text added before sales invoice number when enabled.                | Input                    | empty   | sales_invoice_prefix              | ""            |
| Enable Sales Invoice Suffix     | Activates suffix usage for sales invoice numbering.                 | Toggle (on / off)        | off     | sales_invoice_sufix_enable        | off           |
| Sales Invoice Suffix            | Text added after sales invoice number when enabled.                 | Input                    | empty   | sales_invoice_sufix               | ""            |
| Sales Return Numbering Mode     | Controls whether sales return numbering is automatic or manual.     | Dropdown (auto / manual) | manual  | sales_return_invoice_sequence     | manual        |
| Enable Sales Return Prefix      | Activates prefix usage for sales return numbering.                  | Toggle (on / off)        | off     | sales_return_prefix_enable        | off           |
| Sales Return Prefix             | Text added before sales return number when enabled.                 | Input                    | empty   | sales_return_prefix               | ""            |
| Enable Sales Return Suffix      | Activates suffix usage for sales return numbering.                  | Toggle (on / off)        | off     | sales_return_sufix_enable         | off           |
| Sales Return Suffix             | Text added after sales return number when enabled.                  | Input                    | empty   | sales_return_sufix                | ""            |
| Purchase Order Numbering Mode   | Controls whether purchase order numbering is automatic or manual.   | Dropdown (auto / manual) | manual  | purchase_order_invoice_sequence   | manual        |
| Enable Purchase Order Prefix    | Activates prefix usage for purchase order numbering.                | Toggle (on / off)        | off     | purchase_order_prefix_enable      | off           |
| Purchase Order Prefix           | Text added before purchase order number when enabled.               | Input                    | empty   | purchase_order_prefix             | ""            |
| Enable Purchase Order Suffix    | Activates suffix usage for purchase order numbering.                | Toggle (on / off)        | off     | purchase_order_sufix_enable       | off           |
| Purchase Order Suffix           | Text added after purchase order number when enabled.                | Input                    | empty   | purchase_order_sufix              | ""            |
| Purchase Invoice Numbering Mode | Controls whether purchase invoice numbering is automatic or manual. | Dropdown (auto / manual) | manual  | purchase_invoice_invoice_sequence | manual        |
| Enable Purchase Invoice Prefix  | Activates prefix usage for purchase invoice numbering.              | Toggle (on / off)        | off     | purchase_invoice_prefix_enable    | off           |
| Purchase Invoice Prefix         | Text added before purchase invoice number when enabled.             | Input                    | empty   | purchase_invoice_prefix           | ""            |
| Enable Purchase Invoice Suffix  | Activates suffix usage for purchase invoice numbering.              | Toggle (on / off)        | off     | purchase_invoice_sufix_enable     | off           |
| Purchase Invoice Suffix         | Text added after purchase invoice number when enabled.              | Input                    | empty   | purchase_invoice_sufix            | ""            |
| Purchase Return Numbering Mode  | Controls whether purchase return numbering is automatic or manual.  | Dropdown (auto / manual) | manual  | purchase_return_invoice_sequence  | manual        |
| Enable Purchase Return Prefix   | Activates prefix usage for purchase return numbering.               | Toggle (on / off)        | off     | purchase_return_prefix_enable     | off           |
| Purchase Return Prefix          | Text added before purchase return number when enabled.              | Input                    | empty   | purchase_return_prefix            | ""            |
| Enable Purchase Return Suffix   | Activates suffix usage for purchase return numbering.               | Toggle (on / off)        | off     | purchase_return_sufix_enable      | off           |
| Purchase Return Suffix          | Text added after purchase return number when enabled.               | Input                    | empty   | purchase_return_sufix             | ""            |
| Taxation Type | Defines the default tax structure applied across sales and purchase transactions. If set to GST, system will apply GST rules including CGST, SGST, and IGST based on transaction type. If set to VAT, Value Added Tax rules will be applied accordingly. | Dropdown (GST / VAT) | GST | taxation_type | GST |