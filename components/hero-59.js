import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-59",
  "prefix": "hero59",
  "name": "Hero / Dashboard hotspots",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Dashboard hotspots for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Run every route from one board"
    },
    "subheading": {
      "type": "text",
      "default": "Click the numbered spots to see what your dispatcher sees."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "subheading",
        "div-8"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "0",
        "padding-left": "clamp(20px, 4vw, 48px)",
        "overflow": "hidden"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-45",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "row-gap": "22px",
            "column-gap": "22px",
            "text-align": "center"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "align-items": "center",
                "row-gap": "8px",
                "column-gap": "8px",
                "height": "32px",
                "padding-top": "0",
                "padding-right": "14px",
                "padding-bottom": "0",
                "padding-left": "14px",
                "border-top-left-radius": "999px",
                "border-top-right-radius": "999px",
                "border-bottom-right-radius": "999px",
                "border-bottom-left-radius": "999px",
                "background-color": "#FFFFFF",
                "border-top-width": "1px",
                "border-top-style": "solid",
                "border-top-color": "#DDE0D8",
                "border-right-width": "1px",
                "border-right-style": "solid",
                "border-right-color": "#DDE0D8",
                "border-bottom-width": "1px",
                "border-bottom-style": "solid",
                "border-bottom-color": "#DDE0D8",
                "border-left-width": "1px",
                "border-left-style": "solid",
                "border-left-color": "#DDE0D8",
                "font-size": "14px",
                "color": "#4E545D"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "width": "8px",
                    "height": "8px",
                    "border-top-left-radius": "50%",
                    "border-top-right-radius": "50%",
                    "border-bottom-right-radius": "50%",
                    "border-bottom-left-radius": "50%",
                    "background-color": "#2D4BF0"
                  }
                },
                "attrs": {
                  "aria-hidden": "true"
                }
              },
              {
                "tag": "div",
                "key": "text-2",
                "text": "New: route optimization"
              }
            ]
          },
          {
            "tag": "h1",
            "key": "heading",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "max-width": "860px",
                "font-size": "clamp(44px, 6vw, 84px)",
                "line-height": "0.96",
                "letter-spacing": "-0.05em",
                "font-weight": "600"
              }
            },
            "bind": "heading"
          },
          {
            "tag": "p",
            "key": "subheading",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "max-width": "560px",
                "font-size": "19px",
                "line-height": "1.55",
                "color": "#4E545D"
              }
            },
            "bind": "subheading"
          },
          {
            "tag": "div",
            "key": "div-8",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "center",
                "row-gap": "12px",
                "column-gap": "12px"
              }
            },
            "children": [
              {
                "tag": "a",
                "key": "a-6",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "height": "48px",
                    "padding-top": "0",
                    "padding-right": "22px",
                    "padding-bottom": "0",
                    "padding-left": "22px",
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                    "border-bottom-right-radius": "10px",
                    "border-bottom-left-radius": "10px",
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "font-weight": "500",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "text": "Start free trial"
              },
              {
                "tag": "a",
                "key": "a-7",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "height": "48px",
                    "padding-top": "0",
                    "padding-right": "22px",
                    "padding-bottom": "0",
                    "padding-left": "22px",
                    "border-top-left-radius": "10px",
                    "border-top-right-radius": "10px",
                    "border-bottom-right-radius": "10px",
                    "border-bottom-left-radius": "10px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "color": "#0F1115",
                    "font-weight": "500",
                    "text-decoration": "none"
                  }
                },
                "href": "#",
                "text": "Book a demo"
              }
            ]
          },
          {
            "tag": "div",
            "key": "stack-178",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "width": "100%"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-44",
                "style": {
                  "base": {
                    "position": "relative",
                    "width": "100%",
                    "margin-top": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "0",
                    "border-bottom-left-radius": "0",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "0",
                    "border-bottom-style": "none",
                    "border-bottom-color": "transparent",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "background-color": "#FFFFFF",
                    "box-shadow": "0 -20px 60px -40px rgba(15,17,21,0.35)",
                    "text-align": "left"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "margin-left": "12px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "app.harborline.com/dispatch"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "200px 1fr",
                        "min-height": "380px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "border-right-width": "1px",
                            "border-right-style": "solid",
                            "border-right-color": "#ECEEE8",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "font-weight": "500"
                              }
                            },
                            "text": "Dispatch"
                          },
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Customers"
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Invoices"
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Reports"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "display": "grid",
                            "grid-template-columns": "repeat(3, 1fr)",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-19",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew A"
                              },
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:30 · 14 Alder Ct"
                              },
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:15 · 220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-22",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:00 · 9 Pine Row"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew B"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:00 · 3 Elm Pl"
                              },
                              {
                                "tag": "div",
                                "key": "div-26",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:30 · 77 Shore Dr"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew C"
                              },
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:45 · 61 Mill Rd"
                              },
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:15 · 5 Oak Ln"
                              },
                              {
                                "tag": "div",
                                "key": "div-31",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "11:00 · 12 Ridge Way"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-39",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "9%",
                        "top": "30%",
                        "z-index": "3",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(15,17,21,0.15)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true",
                          "aria-label": "One list per role"
                        },
                        "text": "1"
                      },
                      {
                        "tag": "div",
                        "key": "div-38",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "46px",
                            "left": "-12px",
                            "width": "260px",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "box-shadow": "0 20px 40px -20px rgba(15,17,21,0.6)"
                          }
                        },
                        "attrs": {
                          "role": "note"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "font-weight": "600"
                              }
                            },
                            "text": "One list per role"
                          },
                          {
                            "tag": "div",
                            "key": "div-37",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#B9BEC6"
                              }
                            },
                            "text": "Dispatchers, owners and crews each get the views they need."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "44%",
                        "top": "44%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "Drag to reassign"
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-43",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "80%",
                        "top": "66%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "Conflicts before you drop"
                        },
                        "text": "3"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "block"
                }
              },
              {
                "tag": "div",
                "key": "div-89",
                "style": {
                  "base": {
                    "position": "relative",
                    "width": "100%",
                    "margin-top": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "0",
                    "border-bottom-left-radius": "0",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "0",
                    "border-bottom-style": "none",
                    "border-bottom-color": "transparent",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "background-color": "#FFFFFF",
                    "box-shadow": "0 -20px 60px -40px rgba(15,17,21,0.35)",
                    "text-align": "left",
                    "display": "none"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-58",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-57",
                        "style": {
                          "base": {
                            "margin-left": "12px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "app.harborline.com/dispatch"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-79",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "200px 1fr",
                        "min-height": "380px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-63",
                        "style": {
                          "base": {
                            "border-right-width": "1px",
                            "border-right-style": "solid",
                            "border-right-color": "#ECEEE8",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-59",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "font-weight": "500"
                              }
                            },
                            "text": "Dispatch"
                          },
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Customers"
                          },
                          {
                            "tag": "div",
                            "key": "div-61",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Invoices"
                          },
                          {
                            "tag": "div",
                            "key": "div-62",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Reports"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-78",
                        "style": {
                          "base": {
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "display": "grid",
                            "grid-template-columns": "repeat(3, 1fr)",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-68",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-64",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew A"
                              },
                              {
                                "tag": "div",
                                "key": "div-65",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:30 · 14 Alder Ct"
                              },
                              {
                                "tag": "div",
                                "key": "div-66",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:15 · 220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-67",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:00 · 9 Pine Row"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-72",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-69",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew B"
                              },
                              {
                                "tag": "div",
                                "key": "div-70",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:00 · 3 Elm Pl"
                              },
                              {
                                "tag": "div",
                                "key": "div-71",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:30 · 77 Shore Dr"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-77",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-73",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew C"
                              },
                              {
                                "tag": "div",
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:45 · 61 Mill Rd"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:15 · 5 Oak Ln"
                              },
                              {
                                "tag": "div",
                                "key": "div-76",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "11:00 · 12 Ridge Way"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-81",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "9%",
                        "top": "30%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-80",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "One list per role"
                        },
                        "text": "1"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-86",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "44%",
                        "top": "44%",
                        "z-index": "3",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-82",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(15,17,21,0.15)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true",
                          "aria-label": "Drag to reassign"
                        },
                        "text": "2"
                      },
                      {
                        "tag": "div",
                        "key": "div-85",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "46px",
                            "left": "-12px",
                            "width": "260px",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "box-shadow": "0 20px 40px -20px rgba(15,17,21,0.6)"
                          }
                        },
                        "attrs": {
                          "role": "note"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-83",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Drag to reassign"
                          },
                          {
                            "tag": "div",
                            "key": "div-84",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#B9BEC6"
                              }
                            },
                            "text": "Move a job to another crew. Their route and the customer text update together."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-88",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "80%",
                        "top": "66%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-87",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "Conflicts before you drop"
                        },
                        "text": "3"
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "block"
                }
              },
              {
                "tag": "div",
                "key": "div-134",
                "style": {
                  "base": {
                    "position": "relative",
                    "width": "100%",
                    "margin-top": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "0",
                    "border-bottom-left-radius": "0",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "0",
                    "border-bottom-style": "none",
                    "border-bottom-color": "transparent",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "background-color": "#FFFFFF",
                    "box-shadow": "0 -20px 60px -40px rgba(15,17,21,0.35)",
                    "text-align": "left",
                    "display": "none"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-103",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "height": "44px",
                        "padding-top": "0",
                        "padding-right": "16px",
                        "padding-bottom": "0",
                        "padding-left": "16px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-99",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-100",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-101",
                        "style": {
                          "base": {
                            "width": "10px",
                            "height": "10px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "background-color": "#DDE0D8"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-102",
                        "style": {
                          "base": {
                            "margin-left": "12px",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "app.harborline.com/dispatch"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-124",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "200px 1fr",
                        "min-height": "380px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-108",
                        "style": {
                          "base": {
                            "border-right-width": "1px",
                            "border-right-style": "solid",
                            "border-right-color": "#ECEEE8",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-104",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0",
                                "font-weight": "500"
                              }
                            },
                            "text": "Dispatch"
                          },
                          {
                            "tag": "div",
                            "key": "div-105",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Customers"
                          },
                          {
                            "tag": "div",
                            "key": "div-106",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Invoices"
                          },
                          {
                            "tag": "div",
                            "key": "div-107",
                            "style": {
                              "base": {
                                "padding-top": "8px",
                                "padding-right": "10px",
                                "padding-bottom": "8px",
                                "padding-left": "10px"
                              }
                            },
                            "text": "Reports"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-123",
                        "style": {
                          "base": {
                            "padding-top": "18px",
                            "padding-right": "18px",
                            "padding-bottom": "18px",
                            "padding-left": "18px",
                            "display": "grid",
                            "grid-template-columns": "repeat(3, 1fr)",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-113",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-109",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew A"
                              },
                              {
                                "tag": "div",
                                "key": "div-110",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:30 · 14 Alder Ct"
                              },
                              {
                                "tag": "div",
                                "key": "div-111",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:15 · 220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-112",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:00 · 9 Pine Row"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-117",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-114",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew B"
                              },
                              {
                                "tag": "div",
                                "key": "div-115",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:00 · 3 Elm Pl"
                              },
                              {
                                "tag": "div",
                                "key": "div-116",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "9:30 · 77 Shore Dr"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-122",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px",
                                "padding-top": "12px",
                                "padding-right": "12px",
                                "padding-bottom": "12px",
                                "padding-left": "12px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#F4F5F1"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-118",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Crew C"
                              },
                              {
                                "tag": "div",
                                "key": "div-119",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "8:45 · 61 Mill Rd"
                              },
                              {
                                "tag": "div",
                                "key": "div-120",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "10:15 · 5 Oak Ln"
                              },
                              {
                                "tag": "div",
                                "key": "div-121",
                                "style": {
                                  "base": {
                                    "padding-top": "10px",
                                    "padding-right": "10px",
                                    "padding-bottom": "10px",
                                    "padding-left": "10px",
                                    "border-top-left-radius": "8px",
                                    "border-top-right-radius": "8px",
                                    "border-bottom-right-radius": "8px",
                                    "border-bottom-left-radius": "8px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "font-size": "13px"
                                  }
                                },
                                "text": "11:00 · 12 Ridge Way"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-126",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "9%",
                        "top": "30%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-125",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "One list per role"
                        },
                        "text": "1"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-128",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "44%",
                        "top": "44%",
                        "z-index": "2",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-127",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "false",
                          "aria-label": "Drag to reassign"
                        },
                        "text": "2"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-133",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "left": "80%",
                        "top": "66%",
                        "z-index": "3",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-129",
                        "style": {
                          "base": {
                            "width": "36px",
                            "height": "36px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "3px",
                            "border-top-style": "solid",
                            "border-top-color": "#FFFFFF",
                            "border-right-width": "3px",
                            "border-right-style": "solid",
                            "border-right-color": "#FFFFFF",
                            "border-bottom-width": "3px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#FFFFFF",
                            "border-left-width": "3px",
                            "border-left-style": "solid",
                            "border-left-color": "#FFFFFF",
                            "cursor": "pointer",
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px",
                            "font-weight": "500",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "box-shadow": "0 0 0 6px rgba(15,17,21,0.15)",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "line-height": "1",
                            "flex-shrink": "0",
                            "padding-top": "0px",
                            "padding-right": "0px",
                            "padding-bottom": "0px",
                            "padding-left": "0px"
                          }
                        },
                        "attrs": {
                          "aria-expanded": "true",
                          "aria-label": "Conflicts before you drop"
                        },
                        "text": "3"
                      },
                      {
                        "tag": "div",
                        "key": "div-132",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "top": "46px",
                            "left": "-12px",
                            "width": "260px",
                            "padding-top": "16px",
                            "padding-right": "16px",
                            "padding-bottom": "16px",
                            "padding-left": "16px",
                            "border-top-left-radius": "14px",
                            "border-top-right-radius": "14px",
                            "border-bottom-right-radius": "14px",
                            "border-bottom-left-radius": "14px",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px",
                            "box-shadow": "0 20px 40px -20px rgba(15,17,21,0.6)"
                          }
                        },
                        "attrs": {
                          "role": "note"
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-130",
                            "style": {
                              "base": {
                                "font-size": "15px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Conflicts before you drop"
                          },
                          {
                            "tag": "div",
                            "key": "div-131",
                            "style": {
                              "base": {
                                "font-size": "14px",
                                "line-height": "1.5",
                                "color": "#B9BEC6"
                              }
                            },
                            "text": "Overlaps and long drives are flagged before a job lands."
                          }
                        ]
                      }
                    ]
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "block"
                }
              },
              {
                "tag": "div",
                "key": "div-171",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "9%",
                    "top": "30%",
                    "z-index": "2",
                    "display": "none",
                    "flex-wrap": "wrap",
                    "align-items": "baseline",
                    "column-gap": "0.35rem"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-170",
                    "style": {
                      "base": {
                        "width": "36px",
                        "height": "36px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
                        "font-weight": "500",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "box-shadow": "0 0 0 6px rgba(45,75,240,0.2)",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "aria-expanded": "false",
                      "aria-label": "One list per role"
                    },
                    "text": "1"
                  }
                ],
                "attrs": {
                  "data-blok-panel": "",
                  "data-display": "flex"
                }
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
    }
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
