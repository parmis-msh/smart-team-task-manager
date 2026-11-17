# Architecture Diagram

```mermaid
flowchart TD
    A[Client] --> B[REST API]
    B --> C[Tasks Service]
    B --> D[Users Service]
    C --> E[(Database)]
    D --> E
```
